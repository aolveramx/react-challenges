import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Tests in custom hook useFetch', () => {

  test('should render <useFetch />', () => {
    const wrapper = shallow(<useFetch />)
    expect(wrapper).toMatchSnapshot()
  });

})