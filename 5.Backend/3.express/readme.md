### **Key Takeaways**
1. **Express identifies error-handling middleware by checking for four parameters (`err, req, res, next`).**
2. **Regular middleware runs for all requests and has three parameters (`req, res, next`).**
3. **If an error is passed via `next(error)`, Express skips regular middleware and calls the error handler.**
4. **Error-handling middleware should be defined at the end, after all other middleware and routes.**
