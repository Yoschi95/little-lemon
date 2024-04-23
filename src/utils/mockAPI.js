const availableTimesByDate = {
    '2024-4-23': ['10:00', '11:00', '12:00'],
    '2024-4-24': ['10:00', '11:00', '12:00'],
    '2024-4-25': ['14:00', '15:00', '16:00'],
    '2024-4-26': ['10:00', '11:00', '12:00'],
    '2024-4-27': ['14:00', '15:00', '16:00'],
    '2024-4-28': ['10:00', '11:00', '12:00'],
    '2024-4-29': ['14:00', '15:00', '16:00'],
    '2024-4-30': ['10:00', '11:00', '12:00'],
    '2024-5-1': ['14:00', '15:00', '16:00'],
    '2024-5-2': ['10:00', '11:00', '12:00'],
    '2024-5-3': ['14:00', '15:00', '16:00'],
    '2024-5-4': ['10:00', '11:00', '12:00'],
    '2024-5-5': ['14:00', '15:00', '16:00'],
    '2024-5-6': ['10:00', '11:00', '12:00'],
    '2024-5-7': ['14:00', '15:00', '16:00'],
    '2024-5-8': ['10:00', '11:00', '12:00'],
    '2024-5-9': ['14:00', '15:00', '16:00'],
    '2024-5-10': ['10:00', '11:00', '12:00'],
    '2024-5-11': ['14:00', '15:00', '16:00'],
    '2024-5-12': ['10:00', '11:00', '12:00'],
    '2024-5-13': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}