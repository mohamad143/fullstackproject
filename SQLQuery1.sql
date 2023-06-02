USE [master]
GO
/****** Object:  Database [DB_Online_Shoping]    Script Date: 6/1/2023 11:53:59 PM ******/
CREATE DATABASE [DB_Online_Shoping]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DB_Online_Shoping', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DB_Online_Shoping.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DB_Online_Shoping_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DB_Online_Shoping_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DB_Online_Shoping] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DB_Online_Shoping].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DB_Online_Shoping] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET ARITHABORT OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DB_Online_Shoping] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DB_Online_Shoping] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DB_Online_Shoping] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DB_Online_Shoping] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET RECOVERY FULL 
GO
ALTER DATABASE [DB_Online_Shoping] SET  MULTI_USER 
GO
ALTER DATABASE [DB_Online_Shoping] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DB_Online_Shoping] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DB_Online_Shoping] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DB_Online_Shoping] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DB_Online_Shoping] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DB_Online_Shoping] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'DB_Online_Shoping', N'ON'
GO
ALTER DATABASE [DB_Online_Shoping] SET QUERY_STORE = OFF
GO
USE [DB_Online_Shoping]
GO
/****** Object:  Table [dbo].[TB_Device_Information]    Script Date: 6/1/2023 11:53:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_Device_Information](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Company] [nvarchar](max) NULL,
	[Barcode] [nvarchar](max) NULL,
	[Color] [nvarchar](max) NULL,
	[Price] [float] NULL,
	[Production_year] [nchar](10) NULL,
	[Details] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_TB_Device_Information] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_Order]    Script Date: 6/1/2023 11:53:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_Order](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[User_ID] [int] NULL,
	[Order_Email] [varchar](max) NULL,
	[Order_Items] [varchar](max) NULL,
	[Order_Price] [float] NULL,
	[Order_Date] [datetime] NULL,
	[Order_Location] [varchar](max) NULL,
	[Order_Status] [nvarchar](10) NULL,
 CONSTRAINT [PK_TB_Order] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_StoreItem]    Script Date: 6/1/2023 11:53:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_StoreItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name_Item] [varchar](max) NULL,
	[Price_Item] [float] NULL,
	[Img_Url] [varchar](max) NULL,
	[Category] [varchar](max) NULL,
	[Item_Barcode] [varchar](max) NULL,
 CONSTRAINT [PK_TB_StoreItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_User]    Script Date: 6/1/2023 11:53:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](max) NULL,
	[Email] [varchar](max) NULL,
	[Password] [varchar](max) NULL,
	[Status] [varchar](50) NULL,
	[Rank] [nvarchar](50) NULL,
 CONSTRAINT [PK_TB_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TB_Device_Information] ON 
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (1, N'Apple', N'4423452', N'white', 2499.99, N'2019-10-19', N'Capacity:  512 GB  Model numbers: A2160 (Canada, United States),   Details: iPhone 11 Pro has a 5.8-inch1 all-screen Super Retina XDR display. The back is textured matte glass, and there''s a stainless steel band around the frame. The side button is on the right side of the device. There are three 12 MP cameras on the back: Ultra Wide, Wide, and Telephoto. There''s a Dual-LED True Tone flash on the back and a SIM tray on the right side that holds a "fourth form factor" (4FF) nano-SIM card. The IMEI is etched on the SIM tray.', N'iPhone 11 Pro Max')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (2, N'Asus', N'44235223', N'black', 2999.99, N'2022-06-13', N'(512GB SSD, Intel Core i7 8th Gen. 3.90 GHz, 16GB) Laptop - Black - 90NR01Y1-M00440', N'ASUS ROG Strix Scar II')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (3, N'Apple', N'5235233', N'black', 1999.99, N'2021-02-18', N'64GB Storage 7.9 inch (diagonal) LED-backlit Multi-Touch Retina display 2048-by-1536 resolution at 326 pixels per inch (ppi) Fingerprint-resistant oleophobic coating Operating System: Apple iOS 9', N'iPad Pro')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (4, N'Beats', N'5253235', N'White', 500, N'2021-01-13', N'The white Solo² Wired On-Ear Headphones from Beats by Dr. Dre have been completely redesigned to provide improved acoustics and sonic clarity from their predecessors. They feature a flexible headband and ergonomically angled ear cups to provide a comfortable fit, while the ear cup material helps dissipate heat while minimizing sound leakage. Their detachable RemoteTalk cable is iOS compatible, and allows you to control tracks, volume, and take calls on compatible iOS models. A carrying case is included.  New Sounds The Solo² has a more dynamic, wider range of sound than its predecessor, with a clarity that will bring you closer to what the artist intended Custom Comfort Engineered for comfort. Starting at the center of the flexible headband, the frame of the headphone has been curved like never before, giving the Solo² a custom-fit feeling. The ear cups have been ergonomically angled out to complete this natural fit, with pivots for comfort and sound delivery. Finally, the ear cups help dissipate heat and minimize sound leakage Streamlined Design The Solo² boasts a streamlined aesthetic with no visible screws. Foldable, this headphone is ready for your life on the go No Need to Reach for Your Device Take control. With the color-matched RemoteTalk cable, you can change songs, adjust the volume and even take calls, without having to reach for your device. (Compatible with iOS devices. Functionality may vary by device.)', N'Beats by Dr. Dre Solo2')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (5, N'Samsung', N'5263234', N'BLACK', 2000, N'2022-05-13', N'Discover an extra layer of brilliance enriched with a billion shades of color and boosted OLED screen brightness, powered by QD (Quantum Dots). With OLED technology, get rich contrast and the deepest blacks all from 8.3 million self-lit pixels. Experience everything you watch transformed to 4K by 20 AI powered neural networks with Neural Quantum Processor featuring 4K Upscaling. Watch Hollywood’s HDR movies and streaming shows leap off the screen with true-to-life detail and color with Quantum HDR OLED. Enjoy a front row experience that feels like concert hall acoustics with Dolby Atmos.', N'65" Class S95B OLED 4K Smart T')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (12, N'324234', N'234234', N'234234', 34234, N'2023-05-02', N'34234', N'gg')
GO
SET IDENTITY_INSERT [dbo].[TB_Device_Information] OFF
GO
SET IDENTITY_INSERT [dbo].[TB_StoreItem] ON 
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1, N'iPhone 11 Pro Max', 2499.99, N'https://th.bing.com/th/id/R.47cc9b1266f03915f1e99dc9511f213e?rik=GJm%2fVCYyPhiPog&pid=ImgRaw&r=0', N'Phones', N'4423452')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (2, N'ASUS ROG Strix Scar II', 2999.99, N'https://th.bing.com/th/id/R.16ab28cd65ce815afacbaa64d35f7e38?rik=YOWqp8wKcqoALw&pid=ImgRaw&r=0', N'Computers', N'44235223')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (3, N'iPad Pro', 1999.99, N'https://th.bing.com/th/id/OIP.gKWWP3ZOdZS-NFcjnwAgIAHaG7?pid=ImgDet&rs=1', N'Ipads', N'5235233')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (4, N'Beats by Dr. Dre Solo2', 500, N'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00135_01_solo2_on_ear_headphones_white_1045020.jpg', N'Headphones', N'5253235')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (5, N'65" Class S95B OLED 4K Smart T', 2000, N'https://cdn.shopify.com/s/files/1/1781/9857/products/T665BXE-2_2048x2048.png?v=1605588420', N'TV screens', N'5263234')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (12, N'gg', 34234, N'data:image/jpeg;base64,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', N'Computers', N'234234')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (14, N'cacd', 324324, N'https://th.bing.com/th/id/OIP.I6RnOm5h8B9cOsrLdWPr_wHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', N'Computers', N'32423423')
GO
SET IDENTITY_INSERT [dbo].[TB_StoreItem] OFF
GO
SET IDENTITY_INSERT [dbo].[TB_User] ON 
GO
INSERT [dbo].[TB_User] ([ID], [Name], [Email], [Password], [Status], [Rank]) VALUES (12, N'Admin123123@gmail.com', N'Admin123123@gmail.com', N'$2a$11$2FAhATGbKKgQZPdQy2exaO9xc1kOo2vBoUX571PFlvwd6C8cHwzFq', N'false', N'admin')
GO
INSERT [dbo].[TB_User] ([ID], [Name], [Email], [Password], [Status], [Rank]) VALUES (14, N'Admin@gmail.com', N'Admin@gmail.com', N'$2a$11$0uqputu4APW0XkPWGDYrDehY6drWHFF1OGN4Ma/unfwrQIraSsLiO', N'true', N'admin')
GO
INSERT [dbo].[TB_User] ([ID], [Name], [Email], [Password], [Status], [Rank]) VALUES (17, N'reem1@gmail.com', N'reem1@gmail.com', N'$2a$11$V4lmb3t8kV0gOo72U8b7Be0VYSw0Rd7LC90.651Oj/.FITOjOJ1Ry', N'true', N'admin')
GO
SET IDENTITY_INSERT [dbo].[TB_User] OFF
GO
ALTER TABLE [dbo].[TB_Device_Information]  WITH CHECK ADD  CONSTRAINT [FK_TB_Device_Information_TB_Device_Information] FOREIGN KEY([ID])
REFERENCES [dbo].[TB_Device_Information] ([ID])
GO
ALTER TABLE [dbo].[TB_Device_Information] CHECK CONSTRAINT [FK_TB_Device_Information_TB_Device_Information]
GO
USE [master]
GO
ALTER DATABASE [DB_Online_Shoping] SET  READ_WRITE 
GO
