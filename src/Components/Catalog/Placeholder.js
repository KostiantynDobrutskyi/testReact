import React from "react"
import ContentLoader from "react-content-loader"

const Placeholder = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#d6d6d6"
        foregroundColor="#f5f5f5"
        {...props}
    >
        <circle cx="138" cy="117" r="117" />
        <rect x="0" y="253" rx="5" ry="5" width="280" height="30" />
        <rect x="75" y="326" rx="0" ry="0" width="10" height="0" />
        <rect x="0" y="302" rx="5" ry="5" width="130" height="30" />
        <rect x="146" y="302" rx="5" ry="5" width="130" height="30" />
        <rect x="195" y="349" rx="5" ry="5" width="80" height="30" />
        <rect x="0" y="349" rx="5" ry="5" width="80" height="30" />
        <rect x="98" y="349" rx="5" ry="5" width="80" height="30" />
        <rect x="0" y="415" rx="5" ry="5" width="130" height="30" />
        <rect x="146" y="406" rx="21" ry="21" width="130" height="45" />
    </ContentLoader>
)

export default Placeholder;