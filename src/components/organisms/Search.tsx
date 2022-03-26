// 検索

// React取得
import { useEffect, useState } from 'react';

// モデル取得
import { searchMap } from 'model/PlaceModel';

// コンポーネント取得
import Slider from 'components/molecules/Slider';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import InputText from 'components/atoms/InputText';
import InputRadio from 'components/atoms/InputRadio';

const Search = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [inputText, setInputText] = useState<string>('');
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
			<InputText onChange={setInputText} />
			<button onClick={() => setQueryText(inputText)}>検索</button>
			<SearchInput placeType={placeType} setPlaceType={setPlaceType} />

			<SearchResult placeResults={placeResults} />
		</Slider>
	);
};

export default Search;
