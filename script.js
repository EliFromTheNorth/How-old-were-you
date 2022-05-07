const howOld = (age, year) => {

    let actualYear = 2022;
    let future = year - actualYear
    let past = actualYear-year
    let bornYear = actualYear-age
    
    if (year>actualYear) {
      return `You will be ${age+future} in the year ${year}`;
    } else if ((year< bornYear)) {
      return `The year ${year} was ${bornYear-year} years before you were born.`;
    } else if ((actualYear>year)&&(bornYear < year)) {
      return `You were ${year-bornYear} in the year ${year}`;
    };
    }
    
    
    console.log(howOld(33, 2000));