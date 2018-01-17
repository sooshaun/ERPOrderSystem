import React from 'react'
import { Pagination } from 'antd';


// Other reference source : https://www.youtube.com/watch?v=FmtxKqf0eJQ

const pager = () => {
  return (
    <Pagination
      total={15}
      showTotal={total => `Total ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
  )
}

export default pager
