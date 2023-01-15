import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import PrimaryHeader from '../../components/app-header/primary-header'
import HomeCard from '../../components/home-card'
import Loader from '../../components/loader'
import SearchInput from '../../components/search-input'
import Regular from '../../components/typo-graphy/regular'
import { getHomeData } from '../../services/api/api-actions'
import { HomeStyles } from './home_screen.style'

const HomeScreen = (props) => {
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [students, setStudents] = React.useState([]);
  const [searchList, setSearchList] = React.useState([]);
  const loadMoreData = () => {
    if (!loading && page <= 3 && !searchTerm?.trim()?.length)
      setPage(page + 1);
  }
  const onSearchChnage = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm?.trim()?.length) {
      const filtered = students?.filter(item => {
        return (
          item?.name?.match(new RegExp(searchTerm, 'i')) ||
          item?.id?.match(new RegExp(searchTerm, 'i')) ||
          item?.grade?.match(new RegExp(searchTerm, 'i'))
        )
      });
      setSearchList(filtered);
    }
  }
  //get data from backend
  const getData = async () => {
    try {
      setLoading(true);
      const res = await getHomeData(page);
      setStudents((pre) => [...pre, ...res]);
      setLoading(false);
    } catch (error) {
      console.log('error=>', error);
    }
  }
  React.useEffect(() => {
    getData();
    console.log('page=>>', page);
  }, [page])
  //flatlist card render here
  const renderItem = React.useCallback(({ item, index }) => {
    return (<HomeCard item={item} {...props} />)
  }, []);
  //main component return here
  return (
    <View style={HomeStyles.container}>
      <PrimaryHeader {...props} />
      <View style={HomeStyles.body}>
        <SearchInput onChangeText={onSearchChnage} />
        <FlatList
          data={searchTerm?.trim()?.length ? searchList : students}
          ListFooterComponent={<TouchableOpacity style={{ alignSelf: 'center' }}>
            {loading ?
              <Loader />
              : <Regular label={page <= 3 && !searchTerm?.trim()?.length ? 'Load More ...' : 'No More Data Availble'} />
            }
          </TouchableOpacity>}
          numColumns={2}
          contentContainerStyle={HomeStyles.contentContainerStyle}
          columnWrapperStyle={HomeStyles.columnWrapperStyle}
          renderItem={renderItem}
          keyExtractor={(_, index) => index?.toString()}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  )
}
export default HomeScreen