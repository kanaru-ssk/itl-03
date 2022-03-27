// 星

type Props = {
	// 0.0 ~ 5.0 の値
	rating: number | undefined;
};

const Stars = ({ rating }: Props) => {
	// 0.0 ~ 1.0 に変換
	const offset = rating ? rating / 5 : 0;

	return (
		<svg width="100" height="20" viewBox="0 0 100 20">
			<defs>
				{/* グラデーションを使用して塗る */}
				<linearGradient id="a" gradientUnits="objectBoundingBox">
					<stop offset="0" stopColor="#eeb842" />
					<stop offset={offset} stopColor="#eeb842" />
					<stop offset={offset} stopColor="#ddd" />
					<stop offset="1" stopColor="#ddd" />
				</linearGradient>
			</defs>
			<path
				d="M95.564,17.26l-4.939-3.52-4.939,3.52a.822.822,0,0,1-.418.15.648.648,0,0,1-.377-.163.672.672,0,0,1-.23-.754L86.6,10.849l-5.06-3.566a.645.645,0,0,1-.281-.473A.538.538,0,0,1,81.25,6.7a.672.672,0,0,1,.669-.67h6.2L89.989.444a.678.678,0,0,1,1.273,0l1.87,5.583h6.157A.709.709,0,0,1,100,6.7a.705.705,0,0,1-.217.448l-.122.1-5.018,3.6,1.942,5.645a.664.664,0,0,1-.23.754.6.6,0,0,1-.373.163A.783.783,0,0,1,95.564,17.26Zm-20.313,0-4.939-3.52-4.939,3.52a.82.82,0,0,1-.418.15.649.649,0,0,1-.377-.163.672.672,0,0,1-.23-.754l1.942-5.645L61.23,7.282a.641.641,0,0,1-.28-.473.494.494,0,0,1-.013-.113.672.672,0,0,1,.669-.67h6.2L69.676.444a.678.678,0,0,1,1.273,0l1.87,5.583h6.157a.709.709,0,0,1,.712.67.7.7,0,0,1-.217.448l-.122.1-5.018,3.6,1.942,5.645a.664.664,0,0,1-.23.754.6.6,0,0,1-.373.163A.783.783,0,0,1,75.251,17.26Zm-20.313,0L50,13.74l-4.939,3.52a.82.82,0,0,1-.418.15.649.649,0,0,1-.377-.163.672.672,0,0,1-.23-.754l1.942-5.645-5.06-3.566a.644.644,0,0,1-.28-.473.494.494,0,0,1-.013-.113.672.672,0,0,1,.669-.67h6.2L49.364.444a.678.678,0,0,1,1.273,0l1.871,5.583h6.157a.709.709,0,0,1,.711.67.7.7,0,0,1-.217.448l-.122.1-5.018,3.6,1.942,5.645a.664.664,0,0,1-.23.754.6.6,0,0,1-.373.163A.785.785,0,0,1,54.939,17.26Zm-20.313,0-4.939-3.52-4.939,3.52a.817.817,0,0,1-.418.15.649.649,0,0,1-.377-.163.672.672,0,0,1-.23-.754l1.942-5.645-5.06-3.566a.643.643,0,0,1-.281-.473.494.494,0,0,1-.013-.113.672.672,0,0,1,.669-.67h6.2L29.051.444a.678.678,0,0,1,1.273,0l1.871,5.583h6.157a.71.71,0,0,1,.712.67.7.7,0,0,1-.218.448l-.122.1-5.018,3.6,1.941,5.645a.664.664,0,0,1-.23.754.6.6,0,0,1-.373.163A.785.785,0,0,1,34.626,17.26Zm-20.313,0L9.375,13.74,4.437,17.26a.822.822,0,0,1-.419.15.646.646,0,0,1-.376-.163.672.672,0,0,1-.231-.754l1.942-5.645L.293,7.282A.643.643,0,0,1,.013,6.81.494.494,0,0,1,0,6.7a.672.672,0,0,1,.669-.67h6.2L8.739.444a.678.678,0,0,1,1.272,0l1.871,5.583h6.157a.709.709,0,0,1,.712.67.7.7,0,0,1-.218.448l-.121.1-5.018,3.6,1.942,5.645a.665.665,0,0,1-.231.754.6.6,0,0,1-.373.163A.785.785,0,0,1,14.314,17.26Z"
				fill="url(#a)"
			/>
		</svg>
	);
};

export default Stars;
