import { Box, Stack, styled } from "@mui/material"
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));
export const Mystack:React.FC<{}>=()=>{
            return<><Box sx={{ width: 200 }}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Long content</Item>
            </Stack>
          </Box></>
        }