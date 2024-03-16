import React from "react";

const Home = () => {
  const data = [
    {
      img: "https://t3.ftcdn.net/jpg/01/01/90/56/360_F_101905673_YjJHy9MLWLSq9zJco19zk8zRVsGB2ZfQ.jpg",
      name: "Workshop 123",
      rowSpan: 2,
      colSpan: 2,
    },
    {
      img: "https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg",
      name: "Workshop 456",
    },
    {
      img: "https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg",
      name: "Workshop 789",
    },
    {
      img: "https://img.freepik.com/free-photo/young-man-working-wood-engraving-workshop_23-2149185411.jpg",
      name: "Workshop 135",
    },
    {
      img: "https://t4.ftcdn.net/jpg/05/43/57/97/360_F_543579760_tIT6cHzcc0gUX51DYmLfSDERNwHnA2ag.jpg",
      name: "Workshop 246",
      colSpan: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "Workshop 135",
    },
    {
      img: "https://img.freepik.com/free-photo/young-man-working-wood-engraving-workshop_23-2149185411.jpg",
      name: "Workshop kkk",
    },
    {
      img: "https://img.freepik.com/free-photo/young-man-working-wood-engraving-workshop_23-2149185411.jpg",
      name: "Workshop ppp",
    },
    {
      img: "https://img.freepik.com/free-photo/young-man-working-wood-engraving-workshop_23-2149185411.jpg",
      name: "Workshop qqq",
    },
  ];

  return (
    <div className="home">
      <div className="gallery-grid">
        {data.map((item) => (
          <div
            key={item.name}
            className="img"
            style={{ gridColumn: `span ${item.colSpan}`, gridRow: `span ${item.rowSpan}` }}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
