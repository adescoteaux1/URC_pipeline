export default {
	SetDefaultValue () {
		const serverSideFiltering = {{ serverSideFiltering }};
const defaultValue = "%%";
const options = {{;FetchOptions.data.options }};

if (serverSideFiltering) {
  return defaultValue;
} else if (options.includes(defaultValue)) {
  return defaultValue;
} else {
  return null; // No default value if not in options
}

	}
}