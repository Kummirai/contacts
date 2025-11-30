export const SelectCategory = ({
  contactCategory,
  handleSelectCategory,
  selectedValue,
}) => {
  return (
    <div className="my-5 ml-1">
      <select
        value={selectedValue}
        className="border bg:hover-green-200 border-[#ECFFDC] outline-0 text-[0.85rem] text-green-900 py-1 px-2 rounded-md"
        onChange={(e) => handleSelectCategory(e)}
      >
        <option value="All">All</option>
        {contactCategory?.map((category) => (
          <option value={category.category} key={category._id}>
            {category.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
