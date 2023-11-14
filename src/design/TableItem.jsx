import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Image',
        key: 'image',
        dataIndex: 'image'
      },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    
  },
  {
    title: 'Brand',
    dataIndex: 'barnd',
    key: 'brand',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Size',
    key: 'size',
    dataIndex: 'size',
    
  },
  {
    title: 'Colors',
    key: 'colors',
    dataIndex: 'colors'
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description'
  },
  {
    title: 'Rating',
    key: 'rating',
    dataIndex: 'rating'
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 56,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;