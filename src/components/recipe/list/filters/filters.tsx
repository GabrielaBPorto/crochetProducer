import './filters.scss'
import { styled } from '@stitches/react';
import { blackA, whiteA, grayA } from '@radix-ui/colors';
import * as LabelPrimitive from '@radix-ui/react-label';
import { FaSearch } from 'react-icons/fa';


const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: 'white',
  userSelect: 'none',
});

// Exports
const Label = StyledLabel;

// Your app...
const Flex = styled('div', { display: 'flex', alignContent: 'space-around' });
const Input = styled('input', {
  all: 'unset',
  width: '80vh',
  display: 'inline-flex',
  alignItems: 'start',
  justifyContent: 'start',
  borderRadius: 4,
  padding: '5px',
  height: '3vh',
  fontSize: 15,
  lineHeight: 1,
  color: whiteA,
  border: '1px solid white',
  '&:focus': { boxShadow: `0 0 0 1px black` }
});

const Button = styled('button', {
	height: '5vh',
	borderRadius: 5,
  lineHeight: 1,
	width: '10vh',
	margin: '0 2px',
	backgroundColor: grayA,
	border: '1px solid',
	boderColor: blackA
})

export function Filters() {

  return (
	  <Flex css={{ padding: '5px 5px', flexWrap: 'wrap' }}>
			<Input type="text" id="searchInput" placeholder="Buscar..." />
			<Button type="button" value="buscar" >
				<FaSearch />
			</Button>
		</Flex>
  )
}
