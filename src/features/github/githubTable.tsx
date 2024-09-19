import React, {useEffect, useState} from 'react';
import {DetailsTable, DetailsTableContainer} from "src/features/state/conatiner.styled";
import Pagination from "src/components/Pagination/pagination";
import {Table, Tr} from "src/components/Table/table";
import {GithubTableHeaders} from "src/consts/enums/placeholders.const";


interface Notification {
    id: number;
    link: string;
    identifier: string;
    timestamp: number;
}

const mockNotifications: Notification[] = [
    {id: 1, link: "/message/1", identifier: "Channel 1", timestamp: 1625277600},
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000},
    {id: 1, link: "/message/1", identifier: "Channel 1", timestamp: 1625277600},
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000}, {
        id: 1,
        link: "/message/1",
        identifier: "Channel 1",
        timestamp: 1625277600
    },
    {id: 2, link: "/message/2", identifier: "DM 1", timestamp: 1625364000},
    // Add more mock data as needed
];
const GithubTable: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>(notifications);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [pagination, setPagination] = useState({currentPage: 1, itemsPerPage: 10});

    useEffect(() => {
        setFilteredNotifications(notifications);
    }, [notifications]);

    const currentItems = filteredNotifications.slice(
        (pagination.currentPage - 1) * pagination.itemsPerPage,
        pagination.currentPage * pagination.itemsPerPage
    );

    const handleArchive = (id: number) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    return (
        <DetailsTableContainer>
            <DetailsTable>
                <Table className="border-collapse border border-slate-400 ...">
                    <thead>
                    <Tr className="bg-gray-50">
                        <th className="border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{GithubTableHeaders.LINKS}</th>
                        <th className="border border-slate-300 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {GithubTableHeaders.TIME_STAMP}
                        </th>
                    </Tr>
                    </thead>
                    <tbody className="bg-white divide-gray-200">
                    {currentItems.map(notification => (
                        <tr key={notification.id} className="hover:bg-gray-100">
                            <td className="border border-slate-300 px-6 py-4 whitespace-nowrap">
                                <a href={notification.link} className="text-blue-600 hover:text-blue-900">
                                    {notification.identifier}
                                </a>
                            </td>
                            <td className="border border-slate-300 px-6 py-4 whitespace-nowrap">
                                {new Date(notification.timestamp * 1000).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Pagination
                    currentPage={pagination.currentPage}
                    totalItems={filteredNotifications.length}
                    itemsPerPage={pagination.itemsPerPage}
                    onPageChange={(newPage) => setPagination({...pagination, currentPage: newPage})}
                />
            </DetailsTable>
        </DetailsTableContainer>
    );
};

export default GithubTable;
