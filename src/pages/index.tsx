import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  },
});

export default function Home() {
  return (
    <>
      <Button>
        <span>BB</span>
        AA
      </Button>
    </>
  );
}
