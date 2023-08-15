const get = async () => {
  try {
    const { data } = await axios("https://devdesignhub.com");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

get();
