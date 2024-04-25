class PaymentController {
    constructor(paymentService) {
      this.paymentService = paymentService; 
    }
  
    async gett1Link(req, res) {
      const { name, price, unit, img } = req.query; 
      try {
        const checkout = await this.paymentService.createPaymentt1(
          name, 
          price,
          unit, 
          img 
        );
  
        return res.redirect(checkout.init_point);  
  
      } catch (err) { 
  
        return res.status(500).json({
          error: true,
          msg: "Hubo un error con T1 Pago"
        });
      }
    }
  
   webhook(req, res) { 
      if (req.method === "POST") { 
        let body = ""; 
        req.on("data", chunk => {  
          body += chunk.toString();
        });
        req.on("end", () => {  
          console.log(body, "webhook response"); 
          res.end("ok");
        });
      }
      return res.status(200); 
    }
  }
  
  module.exports = PaymentController;