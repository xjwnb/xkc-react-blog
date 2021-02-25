import React from 'react'

export default function Spinner() {
  const loadingGIF = "https://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/images/loading.gif?versionId=CAEQCRiBgMDZmdCTvhciIGYxZjg5NDY2YWMxZTQ4NjNhYmRjOGI4YzY0MTM0ODQ5";
  return (
    <img width="100%" height="100%" src={loadingGIF} alt="logo"/>
  )
}
