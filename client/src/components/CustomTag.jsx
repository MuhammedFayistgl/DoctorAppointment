/* eslint-disable react/prop-types */
import {  Tag } from "rsuite";

export const CustomTag = ({status}) => {
    const s = status
	return <Tag 
    color={`${s ==="rejected" ? `red` : s ==="pending"  ? 'orange' : `green`}`}
    
    >{status}</Tag>;
};
