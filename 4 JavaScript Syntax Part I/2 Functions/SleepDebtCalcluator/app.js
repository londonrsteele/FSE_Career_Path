
const getSleepHours = day => {
    switch (day) {
      case 'sunday':
        return 10;
        break;
      case 'monday':
        return 11;
        break;
      case 'tuesday':
        return 9;
        break;
      case 'wednesday':
        return 11;
        break;
      case 'thursday':
        return 10;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 12;
        break;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
  
  const getIdealSleepHours = () => {
    const idealHours = 10;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours) {
      console.log('perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('overslept by ' + (actualSleepHours - idealSleepHours) + ' hours');
    } else {
      console.log('underslept by ' + (idealSleepHours - actualSleepHours) + ' hours');
    }
  }
  
  calculateSleepDebt();