import React from "react"
import Helmet from "react-helmet"

export default ({}) => {
  if (typeof window !== `undefined`)
    window.location.replace(`https://zoom.us/j/7865414444?pwd=OHRHUG1MeFZzNUtUTVRoN0Yxb2Z5dz09`)
  return (
    <div>
      <Helmet title="Join My Personal Zoom Meeting"></Helmet>
      You should be redirected...
    </div>
  )
}
