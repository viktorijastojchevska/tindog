class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogCardHtml() {
    const { name, avatar, age, bio } = this;
    return `
            <div class="dog-info">
                <div class="info-box">
                    <h3 class="dog-name"> ${name}, ${age}</h3>
                    <p class="bio">${bio}</p>
                </div>
                <img src="${avatar}" class="profile-pic">
            </div>
        `;
  }
}

export default Dog;
