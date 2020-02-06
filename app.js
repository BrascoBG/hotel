function hotel([arg1, arg2]){
  let month = arg1.toLowerCase();
  let nights = Number(arg2);
  let studio;
  let apartment;

  if(month === 'may' || month === 'october'){
    studio = nights * 50;
    apartment = nights * 65;
    if(nights > 14){
      studio = studio - (studio * 0.30);
    } else if(nights > 7){
      studio = studio - (studio * 0.05);
    }
  } else if(month === 'june' || month === 'september'){
    studio = nights * 75.20;
    apartment = nights * 68.70;
    if(nights > 14){
      studio = studio - (studio * 0.20);
    }
  } else if(month === 'july' || month === 'august'){
    studio = nights * 76;
    apartment = nights * 77;
  }
  if(nights > 14){
    apartment = apartment - (apartment * 0.10);
  }

  console.log("Studio = " + studio.toFixed(2) + " , Apartment = " + apartment.toFixed(2));
}

hotel(['may', 15]);
