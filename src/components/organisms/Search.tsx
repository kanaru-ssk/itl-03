// 検索

// react取得
import { useEffect, useState } from 'react';

// model取得
import { searchMap } from 'model/PlaceModel';

// component取得
import ExploreSlider from 'components/organisms/ExploreSlider';
import SearchType from 'components/organisms/SearchType';
import SearchInput from 'components/organisms/SearchInput';
import SearchResults from 'components/organisms/SearchResults';

const Search = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [queryText, setQueryText] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');
	const [placeResults, setPlaceResult] = useState<google.maps.places.PlaceResult[]>([]);

	useEffect(() => {
		if (queryText !== '' || placeType !== '') {
			setPlaceResult([]);
			searchMap(queryText, placeType).then((result) => setPlaceResult(result));
		}
	}, [placeType, queryText]);

	return (
		<ExploreSlider isOpen={isOpen} setIsOpen={setIsOpen}>
			<SearchInput setIsOpen={setIsOpen} setQueryText={setQueryText} />
			<SearchType placeType={placeType} setPlaceType={setPlaceType} />

			<SearchResults placeResults={placeResults} />
		</ExploreSlider>
	);
};

export default Search;
