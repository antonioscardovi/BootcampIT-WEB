$.ajax({
    url: 'https://randomuser.me/api/?gender=male',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });