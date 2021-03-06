export default function dataParser(state, errors, config) {
  if (state.dataDownload) {
    state.download = state.dataDownload;
    delete state.dataDownload;
  }
  const productId = state.download;
  if (productId) {
    if (!config.products[productId]) {
      delete state.download;
      errors.push({
        message: `No such product: ${productId}`,
      });
    }
  }
}
