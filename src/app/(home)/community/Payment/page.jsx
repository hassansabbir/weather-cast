"use client"
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { AuthContext } from '@/Providers/AuthProvider';
import fetch from 'node-fetch'; 

const PaymentSuccess = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  const companyName = "weatherCast";
  let logoImageData = null; 
  useEffect(() => {
    
    const loadLogoImage = async () => {
      const logoUrl = '../../../../assets/weathercastlogo.png'; 
      const response = await fetch(logoUrl);
      const buffer = await response.arrayBuffer();
      logoImageData = new Uint8Array(buffer);
    };

    loadLogoImage();

    const fetchData = () => {
      if (user?.email) {
        axios
          .get(`https://weather-cast-server.vercel.app/payment/success/${user.email}?paidStatus=true`)
          .then((successResponse) => {
            console.log(successResponse.data);

            axios
              .get(`https://weather-cast-server.vercel.app/payment/fail/${user.email}?paidStatus=false`)
              .then((failResponse) => {
                console.log(failResponse.data);

                const combinedData = [
                  ...successResponse.data.filter((payment) => payment.paidStatus === true),
                  ...failResponse.data.filter((payment) => payment.paidStatus === false),
                ].sort((a, b) => new Date(b.paymentTime) - new Date(a.paymentTime));

                setPayments(combinedData);
              })
              .catch((failError) => {
                console.error('Error fetching failed payment data:', failError);
              });
          })
          .catch((successError) => {
            console.error('Error fetching successful payment data:', successError);
          });
      }
    };

    fetchData();
  }, [user]);

  
  const generateInvoice = async (payment) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Styling
    const fontSize = 16;
    const lineHeight = 24;
    const textX = 50;
    let textY = height - 50;

    
    if (logoImageData) {
      const logoImage = await pdfDoc.embedPng(logoImageData);
      page.drawImage(logoImage, {
        x: textX,
        y: height - 50,
        width: 100, 
        height: 50,
      });
    }

 
    page.drawText(companyName, {
        x: width / 2 - 200,
      y: textY,
      size: 30,
       color: rgb(255/255,255/255,255/255),
    });
    textY -= 2 * lineHeight;




    // Title
    page.drawText('Congratulation for Successful Payment', {
        x: width / 2 - 200,
      y: textY,
      size: 24,
       color: rgb(0, 0, 0),
    });
    textY -= 2 * lineHeight;

    // Payment details
    page.drawText(`Payment ID: ${payment ? payment.tranjectionId : ''}`, {
        x: width / 2 - 200,
      y: textY,
      size: 16,
       color: rgb(0, 0, 0),
    });
    textY -= lineHeight;

    page.drawText(`Payment Amount: $${payment.donationAmount}`, {
        x: width / 2 - 200,
      y: textY,
      size: fontSize,
      font: font,
       color: rgb(0, 0, 0),
    });
    textY -= lineHeight;

    // Thank you message
    page.drawText('Thank you for your payment!', {
        x: width / 2 - 200,
      y: textY,
      size: fontSize,
      font: font,
       color: rgb(0, 0, 0),
    });
    textY -= 2 * lineHeight;

    // Payment time
    page.drawText(`Payment Time: ${payment.paymentTime}`, {
        x: width / 2 - 200,
      y: textY,
      size: fontSize,
      font: font,
       color: rgb(0, 0, 0),
    });
    textY -= lineHeight;

    // Download time (current time)
    const currentTime = new Date().toLocaleString();
    page.drawText(`Downloaded: ${currentTime}`, {
        x: width / 2 - 200,
      y: textY,
      size: fontSize,
      font: font,
       color: rgb(0, 0, 0),
    });
    textY -= 2 * lineHeight;

    // Signature
    page.drawText('By weatherCast Team', {
        x: width / 2 - 200,
      y: textY,
      size: fontSize,
      font: font,
       color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    return pdfUrl;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Payments</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Payment ID</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border text-center">{payment.email}</td>
              <td className="p-2 border text-center">{payment.tranjectionId}</td>
              <td className="p-2 border text-center">{payment.donationAmount}</td>
              <td className={`p-2 border text-center font-semibold ${payment.paidStatus ? 'text-green-600' : 'text-red-600'}`}>
                {payment.paidStatus ? 'Success' : 'Failed'}
              </td>
              <td className="p-2 border text-center">{payment.paymentTime}</td>
              <td className="p-2 border text-center">
                {payment.paidStatus ? (
                  <a href="#" onClick={async (e) => {
                    e.preventDefault();
                    const invoiceUrl = await generateInvoice(payment);
                    const a = document.createElement('a');
                    a.href = invoiceUrl;
                    a.download = 'invoice.pdf';
                    a.click();
                  }}>
                    <button>Download Invoice</button>
                  </a>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSuccess;







