const availableTimesByDate = {
    '2024-04-23': ['10:00', '11:00', '12:00'],
    '2024-04-24': ['10:00', '11:00', '12:00'],
    '2024-04-25': ['14:00', '15:00', '16:00'],
    '2024-04-26': ['10:00', '11:00', '12:00'],
    '2024-04-27': ['14:00', '15:00', '16:00'],
    '2024-04-28': ['10:00', '11:00', '12:00'],
    '2024-04-29': ['14:00', '15:00', '16:00'],
    '2024-04-30': ['10:00', '11:00', '12:00'],
    '2024-05-01': ['14:00', '15:00', '16:00'],
    '2024-05-02': ['10:00', '11:00', '12:00'],
    '2024-05-03': ['14:00', '15:00', '16:00'],
    '2024-05-04': ['10:00', '11:00', '12:00'],
    '2024-05-05': ['14:00', '15:00', '16:00'],
    '2024-05-06': ['10:00', '11:00', '12:00'],
    '2024-05-07': ['14:00', '15:00', '16:00'],
    '2024-05-08': ['10:00', '11:00', '12:00'],
    '2024-05-09': ['14:00', '15:00', '16:00'],
    '2024-05-10': ['10:00', '11:00', '12:00'],
    '2024-05-11': ['14:00', '15:00', '16:00'],
    '2024-05-12': ['10:00', '11:00', '12:00'],
    '2024-05-13': ['14:00', '15:00', '16:00'],
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