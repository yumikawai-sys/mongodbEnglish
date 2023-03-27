// data fetching
const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");
const formDOM = document.querySelector(".form-section");
const threadSectionDOM = document.querySelector(".thread-section");
let inputText = "";
let contentText = "";

const getAllThreads = async () => {
  try {
    console.log("show");
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
    let { data } = allThreads;
    console.log(data);
    console.log(data.length);
    
    allThreads = data
      .map((thread) => {
        const { title, content } = thread;
        console.log(title);
        return `
      <div class="single-thread">
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      `;
      })
      .join("");  //This is to remove , between data
    
    threadSectionDOM.innerHTML = allThreads;
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

inputTextDOM.addEventListener("change", (e) => {
    //   console.log(e.target.value);
    inputText = e.target.value;
  });
  inputContentDOM.addEventListener("change", (e) => {
    contentText = e.target.value;
  });
  
  formDOM.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (inputText && inputContent) {
      console.log("success");
  
      try {
        console.log(inputText);
        await axios.post("/ap1/v1/thread", {
          title: inputText,
          content: contentText,
        });
        getAllThreads();
      } catch (err) {
        console.log(err);
      }
  
      inputText = "";
      contentText = "";
      inputTextDOM.value = "";
      inputContentDOM.value = "";
    } else {
      console.log("error");
    }
  });