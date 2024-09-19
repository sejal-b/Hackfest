import React, { useEffect, useMemo, useState } from 'react';
import { SlackTableHeaders, SORTBY} from 'src/consts/enums/placeholders.const';
import { DetailsTable, DetailsTableContainer } from 'src/features/state/conatiner.styled';
import Pagination from 'src/components/Pagination/pagination';
import { Table, Tr } from 'src/components/Table/table';
import Mockdata, { Notification } from 'src/mock/data';
import MultiSelectDropdownCheckbox from '../../components/FilterColumns/filter';
import SortColumn from "../../components/SortedColumns/sort";

const SlackTable: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(Mockdata);
  const [filteredNotifications, setFilteredNotifications] =
    useState<Notification[]>(notifications);
  const [selectedIdentifiers, setSelectedIdentifiers] = useState<string[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
  });
  const [sortOrder, setSortOrder] = useState<SORTBY>(SORTBY.DESC);

  useEffect(() => {
    const filtered =
      selectedIdentifiers.length > 0
        ? notifications.filter((notification) =>
            selectedIdentifiers.includes(notification.identifier)
          )
        : notifications;
    setFilteredNotifications(filtered);
    setPagination({ ...pagination, currentPage: 1 });
  }, [notifications, selectedIdentifiers]);

  const handleSortChange = () => {
    const sorted = [...filteredNotifications].sort((a, b) => {
      if (sortOrder === SORTBY.ASC) {
        return a.timestamp - b.timestamp;
      } else {
        return b.timestamp - a.timestamp;
      }
    });
    setFilteredNotifications(sorted);
    setSortOrder(sortOrder === SORTBY.ASC ? SORTBY.DESC : SORTBY.ASC);
  };

  const handleIdentifierChange = (newSelectedIdentifiers: string[]) => {
    setSelectedIdentifiers(newSelectedIdentifiers);
    setPagination({ ...pagination, currentPage: 1 });
  };

  const currentItems = useMemo(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    return filteredNotifications.slice(startIndex, endIndex);
  }, [filteredNotifications, pagination]);

  return (
    <DetailsTableContainer>
      {currentItems.length > 0 ? (
        <DetailsTable>
          <Table className="border-collapse border border-slate-400">
            <thead>
              <Tr className="bg-gray-50">
                <th className="border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {SlackTableHeaders.MESSAGES}
                </th>
                <th className="border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {SlackTableHeaders.TIME_STAMP}
                    <SortColumn
                      columnName=""
                      key="timestamp"
                      updateFilters={handleSortChange}
                      asc={sortOrder}
                    />
                  </div>
                </th>
                <th className="border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {SlackTableHeaders.TYPE}
                  <MultiSelectDropdownCheckbox
                    options={Array.from(
                      new Set(notifications.map((n) => n.identifier))
                    )}
                    onSelectionChange={handleIdentifierChange}
                    placeholder=""
                  />
                </th>
              </Tr>
            </thead>
            <tbody className="bg-white divide-gray-200">
              {currentItems.map((notification) => (
                <tr key={notification.id} className="hover:bg-gray-100">
                  <td className="border border-slate-300 px-6 py-4 whitespace-nowrap">
                    <a
                      href={notification.link}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      {notification.link}
                    </a>
                  </td>
                  <td className="border border-slate-300 px-6 py-4 whitespace-nowrap">
                    {new Date(notification.timestamp * 1000).toLocaleString()}
                  </td>
                  <td className="border border-slate-300 px-6 py-4 whitespace-nowrap">
                    {notification.identifier}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            currentPage={pagination.currentPage}
            totalItems={filteredNotifications.length}
            itemsPerPage={pagination.itemsPerPage}
            onPageChange={(newPage) =>
              setPagination({ ...pagination, currentPage: newPage })
            }
          />
        </DetailsTable>
      ) : (
        <p>No results found.</p>
      )}
    </DetailsTableContainer>
  );
};

export default SlackTable;
