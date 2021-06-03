import React from 'react'
import { Result, Button } from 'antd';

const index = props => {
  return (
    <div style={{ height: '100vh', paddingTop: 100 }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

export default index
