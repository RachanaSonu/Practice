import { Rating, Typography } from "@mui/material"

export const Myrating: React.FC<{}> = () => {
    return <>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={5} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={1} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} /></>
}