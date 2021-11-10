import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Users from "../../components/Users"

describe('Tests in <Users />', () => {

 test('should render <Users />', () => {
   const wrapper = shallow(<Users />)
   expect(wrapper).toMatchSnapshot()
 });

})