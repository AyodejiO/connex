const mockAxios = jest.genMockFromModule('axios')

// this fixes the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios