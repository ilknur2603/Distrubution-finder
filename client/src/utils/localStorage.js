export const getSavedCharityIds = () => {
    const savedCharityIds = localStorage.getItem('saved_charity')
      ? JSON.parse(localStorage.getItem('saved_charity'))
      : [];
  
    return savedCharityIds;
  };
  
  export const saveCharityIds = (charityIdArr) => {
    if (charityIdArr.length) {
      localStorage.setItem('saved_charitys', JSON.stringify(charityIdArr));
    } else {
      localStorage.removeItem('saved_charitys');
    }
  };
  
  export const removeCharityId = (charityId) => {
    const savedCharityIds = localStorage.getItem('saved_charity')
      ? JSON.parse(localStorage.getItem('saved_charity'))
      : null;
  
    if (!savedCharityIds) {
      return false;
    }
  
    const updatedSavedCharityIds = savedCharityIds?.filter((savedCharityId) => savedCharityId !== charityId);
    localStorage.setItem('saved_charitys', JSON.stringify(updatedSavedCharityIds));
  
    return true;
  };
  