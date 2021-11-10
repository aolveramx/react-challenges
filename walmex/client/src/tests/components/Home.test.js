import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Home from "../../components/Home"

describe('Tests in <Home />', () => {

 test('should render <Home />', () => {
   const wrapper = shallow(<Home />)
   expect(wrapper).toMatchSnapshot()
 });

})