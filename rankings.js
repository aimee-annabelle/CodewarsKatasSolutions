function rank(st, we, n) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let rankings = [];
  let result = "";
  if (st) {
    let stArr = st.split(",");
    if (n > stArr.length) return "Not enough participants";
    for (let name of stArr) {
      let som = name.length;
      for (let i = 0; i < name.length; i++) {
        som += alpha.includes(name[i].toLowerCase())
          ? alpha.indexOf(name[i].toLowerCase()) + 1
          : 0;
      }
      rankings.push({
        name: name,
        win: som * we[stArr.indexOf(name)],
      });
    }
    rankings.sort((a, b) => b.win - a.win);
    for (let i = 1; i < rankings.length; i++) {
      if (
        rankings[i].win === rankings[i - 1].win &&
        rankings[i].name < rankings[i - 1].name
      ) {
        [rankings[i - 1], rankings[i]] = [rankings[i], rankings[i - 1]];
      }
    }
    rankings.map((a, idx) => (a.rank = idx + 1));
    for (let rank of rankings) {
      if (n === rank.rank) result = rank.name;
    }
    return result;
  } else {
    return "No participants";
  }
}
