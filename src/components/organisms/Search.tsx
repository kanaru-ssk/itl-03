// 検索

// React取得
import { useEffect, useState } from 'react';

// モデル取得
import { searchMap } from 'model/PlaceModel';

// コンポーネント取得
import Slider from 'components/molecules/Slider';
import SearchType from './SearchType';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const Search = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [queryText, setQueryText] = useState<string>('');
	const [placeType, setPlaceType] = useState<placeType>('');
	const [placeResults, setPlaceResult] = useState<google.maps.places.PlaceResult[]>([]);

	useEffect(() => {
		if (queryText !== '' || placeType !== '') {
			searchMap(queryText, placeType).then((result) => setPlaceResult(result));
		}
	}, [placeType, queryText]);

	return (
		<Slider isOpen={isOpen} setIsOpen={setIsOpen}>
			<SearchInput setIsOpen={setIsOpen} setQueryText={setQueryText} />
			<SearchType placeType={placeType} setPlaceType={setPlaceType} />

			<SearchResults placeResults={placeResults} />
		</Slider>
	);
};

export default Search;
