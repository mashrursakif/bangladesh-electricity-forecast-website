export default function RangeDropdown({ onChange: handleChange }) {
  return (
    <select
      onChange={handleChange}
      className='text-lg font-semibold border-gray-500 border-2 px-2 py-1 rounded'
    >
      <option value='7'>7 days</option>
      <option value='30'>30 days</option>
      <option value='60'>60 days</option>
      <option value='-1'>All data</option>
    </select>
  );
}
