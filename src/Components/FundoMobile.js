export default function FundoMobile() {
  const ionIcons = [
    { name: "home" },
    { name: "search-outline" },
    { name: "add-circle-outline" },
    { name: "heart-outline" },
    { name: "person-outline" },
  ];
  return (
    <div>
      {ionIcons.map((a) => (
        <ion-icon name={a.name}></ion-icon>
      ))}
    </div>
  );
};
