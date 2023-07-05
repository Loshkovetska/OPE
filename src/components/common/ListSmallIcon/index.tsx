import ImageComponent from "../ImageComponent";

const ListSmallIcon = ({ icon }: { icon: any }) => {
  return (
    <div className="small-icon">
      <ImageComponent img={icon} />
    </div>
  );
};

export default ListSmallIcon;
