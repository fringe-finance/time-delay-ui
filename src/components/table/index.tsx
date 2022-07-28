import axios from "axios";
import { useState, useEffect } from "react";
import { TableStyled } from "./styled";
import moment from "moment";
import { TestTable } from "components/MethodColumn/test";
import { Tooltip } from "antd";
import { ParamColumn } from "components/ParamColumn";

export const PendingTable = ({ timeType, filter }) => {
  const [data, setData] = useState<any>([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (record) => (
        <>
          <Tooltip placement="topLeft" title={record}>
            {record?.substring(0, 3) + "..." + record?.substring(21)}
          </Tooltip>
        </>
      ),
    },
    {
      title: "Date Time Submitted",
      dataIndex: "dateTimeSubmitted",
      render: (record) => (
        <>
          {timeType === "gmt"
            ? moment(record * 1000)
                .utc()
                .format("lll")
            : moment(record * 1000).format("lll")}
        </>
      ),
    },
    {
      title: "Date time effective",
      dataIndex: "dateTimeEffective",
      render: (record) => (
        <>
          {timeType === "gmt"
            ? moment(record * 1000)
                .utc()
                .format("lll")
            : moment(record * 1000).format("lll")}
        </>
      ),
    },
    {
      title: "Hour mins until effective",
      dataIndex: "hourMinsUtilEffective",
      render: (_, record) => (
        <>
          {moment(record?.dateTimeEffective * 1000)
            .startOf("hours")
            .fromNow()}
        </>
      ),
    },
    {
      title: "Executed",
      dataIndex: "executed",
      render: (record) => <>{record?.toString()}</>,
    },
    {
      title: "Methods",
      dataIndex: "methods",
      render: (record) => <TestTable id={record?.substring(0, 10)} />,
    },
    {
      title: "Parameters",
      dataIndex: "parameters",
      render: (_, record) => <ParamColumn method={record?.methods} />,
    },
    {
      title: "Tx ID",
      dataIndex: "txId",
      render: (record) => (
        <a
          href={`https://mumbai.polygonscan.com/tx/${record}`}
          target="_blank"
          rel="noreferrer"
        >
          View on the block explorer
        </a>
      ),
    },
  ];

  useEffect(() => {
    void (async () => {
      const res = await axios.get(
        process.env.REACT_APP_API + "polygon" + `?pending=${filter}`
      );
      if (res) setData(res.data.data);
    })();
  }, [filter]);

  return <TableStyled columns={columns} dataSource={data} />;
};
