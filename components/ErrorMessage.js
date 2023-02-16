import ShortcutError from "./ShortcutError";
import { Box } from './Box'

export default function ErrorMessage({ code }) {
  let title = "Oops! An Error Occured";
  let description = "Something is broken.";

  if (code === 404) {
    title = "Page not found";
    description = "This page doesn't exist.";
  }

  return (
    <Box css={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <ShortcutError />
      <p>{description}</p>
    </Box>
  );
}