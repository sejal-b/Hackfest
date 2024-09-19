import React from 'react';
import {SORTBY} from "../../consts/enums/placeholders.const";
import {Button} from "@blueprintjs/core";


function SortColumn({
                        columnName,
                        key,
                        updateFilters,
                        asc,
                    }: {
    columnName: string;
    key: string;
    updateFilters: (columnName: string, ids: string[]) => void;
    asc: SORTBY;
}) {
    return (
        <Button
            key={key}
            minimal
            rightIcon={asc === SORTBY.ASC ? 'sort-asc' : 'sort-desc'}
            onClick={() => updateFilters(columnName, [])}
            style={{ marginLeft: '8px' }}
        >
        </Button>
    );
}

export default SortColumn;
