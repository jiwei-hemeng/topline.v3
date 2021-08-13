import Request from "@/utils/request.js";
export function test() {
  return Request({
    url: "xs/getSlideshow",
    method: "POST",
  });
}
