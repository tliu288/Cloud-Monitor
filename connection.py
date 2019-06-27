import socket
import time
import smtplib
from os.path import basename
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import COMMASPACE, formatdate
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders


while 1:
	sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	result = sock.connect_ex(('0.0.0.0',10000))
	if result == 0:
  	 print ("Port is in use")
	else:
  	 print ("Port is not in use")
  	 mail_content = '''Hello,
  	 The monitor has crashed. Please restart.
  	 '''
  	 #The mail addresses and password
  	 sender_address = 'username@gmail.com'
  	 sender_pass = 'password'
  	 receiver_address = 'username@gmail.com'
  	 #Setup the MIME
  	 message = MIMEMultipart()
  	 message['From'] = sender_address
  	 message['To'] = receiver_address
  	 message['Subject'] = 'The monitor has crashed. Please restart.'
  	 #The subject line
  	 message.attach(MIMEText(mail_content, 'plain'))
  	 #Create SMTP session for sending the mail
  	 session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
  	 session.starttls() #enable security
  	 session.login(sender_address, sender_pass) #login with mail_id and password
  	 text = message.as_string()
  	 session.sendmail(sender_address, receiver_address, text)
  	 session.quit()
  	 print('The monitor alert has Sent')

	sock.close()
	time.sleep(5)

