export async function getImages() {
  try {
    const url =
      "https://hub.dummyapis.com/ImagesList?text=Course&noofimages=50&height=120&width=120";
    const res = await fetch(url);
    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCourseName() {
  try {
    const url =
      "https://hub.dummyapis.com/singlelist?text=CourseName&noofRecords=1";
    const res = await fetch(url);
    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

""