using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Online_Shoping_API.Helper;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;
using AuthProject.Dtos;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using BCrypt.Net;
using Microsoft.AspNetCore.Authentication;
using NuGet.Protocol;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http.Extensions;
using System.Net;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace Online_Shoping_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserModelsController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        private readonly IHttpContextAccessor _httpContextAccessor;
       
      


        public UserModelsController(IUserRepository repository, JwtService jwtService, IHttpContextAccessor httpContextAccessor)
        {
            _repository = repository;
            _jwtService = jwtService;
            _httpContextAccessor = httpContextAccessor;


        }
        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var usercheek = _repository.GetUserByEmail(dto.Email);
            if (usercheek != null)
            {
                return BadRequest( "email avilable" );
            }
            var user = new UserModel
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Status = dto.Status,
                Rank=dto.Rank,


            };
            _repository.CreateUser(user);


            return Ok("Success");

        }
        [HttpPost("login")]
        public string Login(LoginDto dto)
        {
            var user = _repository.GetUserByEmail(dto.Email);
            if (user == null)
            {
                return  "Invalid Credentials" ;
            }
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return  "Invalid Credentials" ;
            }
            user.Status = "true";
            _repository.UpdateUser(user);
            var jwt = _jwtService.Generate(user.Id);
            
            return jwt;


        }
        [HttpGet("user")]
        public new UserModel User(string jwt)
        {
            try
            {
                
                if (jwt != null)
                {
                    var token = _jwtService.Verify(jwt);
                    int userId = int.Parse(token.Issuer);
                    var user = _repository.GetUserById(userId);
                    return user;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet("users")]
        public List<UserModel> Users()
        {
            try
            {
               
                var users = _repository.GetUsers();
                return users;
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpPut("logout")]
        public string Logout(int id)
        {
            var usercheek = _repository.GetUserById(id);
            if (usercheek == null)
            {
                return "sry error";
            }
            usercheek.Status = "false";
            
            _repository.UpdateUser(usercheek);


            return "Success";
            
        }
        [HttpDelete]
        public string delete(string email)
        {
            var user = _repository.GetUserByEmail(email);
            if (user != null)
            {
                _repository.DeleteUser(user.Id);
                return "Success";
            }
          
            return "sry error";

        }
        [HttpDelete("delete-acc")]
        public string deleteAcc(string email,string password)
        {
            var user = _repository.GetUserByEmail(email);
            if (user == null)
            {
                return "sry error";
            }
            
            else if(!BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return "try agine";
            }
            _repository.DeleteUser(user.Id);


            return "Success";

        }
        [HttpPost("send-email")]
        public string SendEmail(string email)
        {
            var user = _repository.GetUserByEmail(email);
            _repository.DeleteUser(user.Id);
            try
            {
                // Sender's email address and credentials
                string senderEmail = "bdran1474@gmail.com";
                string senderPassword = "atrtydaglssaokub";

                // Recipient's email address
                string recipientEmail = email;

                var mailMessage = new MimeMessage();
                mailMessage.From.Add(new MailboxAddress("online shopping team", senderEmail));
                mailMessage.To.Add(new MailboxAddress(recipientEmail, recipientEmail));
                mailMessage.Subject = "your password";
                mailMessage.Body = new TextPart("plain")
                {
                    Text = $"hi {email} you need to Sign Up agine with new password.\n" + $"Thank you, We are here to serve you (:. For any inquiries, you can contact us {senderEmail}"
                };

                using (var smtpClient = new SmtpClient())
                {
                    
                    smtpClient.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    smtpClient.Authenticate(senderEmail, senderPassword);
                    smtpClient.Send(mailMessage);
                    smtpClient.Disconnect(true);
                }

                return "Email sent successfully.You may find mail in spam. ";
            }
            catch (Exception ex)
            {
                return  "Failed to send email: " + ex.Message;
            }
        }
    }


}
