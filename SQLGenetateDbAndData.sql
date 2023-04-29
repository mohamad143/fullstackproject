USE [master]
GO
/****** Object:  Database [DB_Online_Shoping]    Script Date: 4/29/2023 6:36:09 PM ******/
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
/****** Object:  Table [dbo].[TB_Device_Information]    Script Date: 4/29/2023 6:36:09 PM ******/
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
/****** Object:  Table [dbo].[TB_Order]    Script Date: 4/29/2023 6:36:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_Order](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[User_ID] [int] NULL,
	[Order_Email] [nvarchar](50) NULL,
	[Order_Items] [nvarchar](200) NULL,
	[Order_Price] [float] NULL,
	[Order_Date] [datetime] NULL,
	[Order_Location] [nvarchar](50) NULL,
	[Order_Status] [nvarchar](10) NULL,
 CONSTRAINT [PK_TB_Order] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TB_StoreItem]    Script Date: 4/29/2023 6:36:09 PM ******/
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
/****** Object:  Table [dbo].[TB_User]    Script Date: 4/29/2023 6:36:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TB_User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[User_Name] [nvarchar](50) NULL,
	[User_Email] [nvarchar](50) NULL,
	[User_Pass] [nvarchar](50) NULL,
	[User_Status] [varchar](50) NULL,
	[User_Rank] [nvarchar](50) NULL,
 CONSTRAINT [PK_TB_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TB_Device_Information] ON 
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (49, N'Apple', N'92244421', N'white', 800, N'2022      ', N'128gb,4GB RAM,3265mA', N'iPhone 14 Pro')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (50, N'Samsung', N'523523123', N'black', 999.99, N'2022      ', N'Outfitted with everything you need to stay connected; the Samsung Galaxy A13 lets you view, store and capture more at a price you’ll love. An edge-to-edge Full High Definition+ (FHD+) display brings your photos, videos and entertainment to life, while a long-lasting battery with Fast Charging keeps you going and going. The Samsung Galaxy A13 is loaded with multiple cameras so you can capture moments from any angle, with amazing depth. Memories stay vibrant, selfies look super and video calls are clear. Onboard memory of 32GB is expandable to 1TB with a separately purchased SD card, letting you hold onto hundreds of thousands of photos, songs, videos and files. The Android 12 operating system ensures an engaging experience with updated options that make using your Samsung Galaxy A13 effortlessly intuitive. Security and login are a breeze thanks to facial recognition and a fingerprint sensor. While the accessibility features let you adjust for what works best for you. For an extra fun touch of personalization, you can make the phone your own by choosing a wallpaper, and all informational displays will be customized to match the color palette. Any way you look at it, the Samsung Galaxy A13 is designed to be easy and enjoyable to use while keeping you connected to who and what matters most.', N'Galaxy S22 Plus 5G')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (51, N'Apple', N'87299123', N'black', 1799.99, N'2019      ', N'The iPad Pro is a premium model of Apple''s iPad tablet computer. It runs iPadOS, a tablet-optimized version of the iOS operating system. The original iPad Pro was introduced in September 2015, and ran iOS 9. It had an A9X chip, and came in two sizes: 9.7-inch and 12.9 inch. The second-generation iPad Pro, unveiled in June 2017, had an upgraded A10X Fusion chip and swapped the 9.7-inch screen for a larger 10.5-inch display. The third-generation iPad Pro, announced in October 2018, eliminated the home button, and featured Face ID; it came in 11-inch and 12.9-inch models, the same screen sizes used by every subsequent model to date. The fourth-generation iPad Pro, introduced in March 2020, included the A12Z chip, and added support for the Magic Keyboard. The fifth-generation iPad Pro, announced in April 2021, incorporated a desktop-class M1 chip, making it the first iPad model to not use an A-series processor. The sixth- and current-generation iPad Pro, introduced in October 2022, includes the M2 chip, Apple Pencil Hover, and ProRes video.', N'iPad Pro 11 ')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (52, N'Beats', N'42234252', N'White', 500, N'2021      ', N'Available in glossy pink, blue, or gray along with the more traditional Beats colors of red, black, or white, the Solo 2 looks similar to other Beats headphones. The on-ear (supra-aural) fit is extremely lightweight, with plush earpads and enough cushioning under the headband to stay comfortable. You can fasten on a little too tight and create some unnecessary pressure on the ears; loosening them a bit eliminates any tension issues without making them less secure on the head as it might with most headphones.

', N'Beats by Dr.Dre Solo2')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (53, N'no company', N'342388123', N'Blue', 10.99, N'2022      ', N'Over Ear Headphones with Mic,Foldable Headphones Jelly Comb Headsets Headphones with Microphone Volume Control Headphones for Cell Phone, Tablet, PC, Laptop (Blue)', N'Headphones with Microphone')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (54, N'Asus', N'252325425', N'black', 2999.99, N'2022      ', N'The ROG Strix G15/17 embodies streamlined design, offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro. Featuring up to the latest 10th Gen Intel® Core™ i7 CPU and a GeForce RTX™ 2070 SUPER GPU, it offers high-FPS power that takes full advantage of up to a blazing fast 240Hz/3ms display. Intelligent cooling innovations like liquid metal take performance to another level. Ultrafast Wi-Fi 6 connectivity and up to 2 SSDs running in RAID 0 accelerate work and play. Space for a third SSD means you can upgrade your storage to carry your complete games collection everywhere you go.', N'ASUS ROG STRIX G17')
GO
INSERT [dbo].[TB_Device_Information] ([ID], [Company], [Barcode], [Color], [Price], [Production_year], [Details], [Name]) VALUES (55, N'KOGAN ', N'324256313', N'black', 899.99, N'2021      ', N'KOGAN 24" LED TV & DVD COMBO (SERIES 6 EH6000) - KALED24EH6000DVA - MANUALS AND SUPPORT', N'KOGAN 24" LED TV')
GO
SET IDENTITY_INSERT [dbo].[TB_Device_Information] OFF
GO
SET IDENTITY_INSERT [dbo].[TB_Order] ON 
GO
INSERT [dbo].[TB_Order] ([ID], [User_ID], [Order_Email], [Order_Items], [Order_Price], [Order_Date], [Order_Location], [Order_Status]) VALUES (72, 56, N'Business@gmail.com', N'iPhone 14 Pro  * 1 barcode: 92244421,Beats by Dr.Dre Solo2 * 1 barcode: 42234252', 1300, CAST(N'2023-04-29T15:12:14.000' AS DateTime), N'חיפה', N'false')
GO
INSERT [dbo].[TB_Order] ([ID], [User_ID], [Order_Email], [Order_Items], [Order_Price], [Order_Date], [Order_Location], [Order_Status]) VALUES (73, 57, N'Regular@gmail.com', N'Galaxy S22 Plus 5G * 2 barcode: 523523123,iPad Pro 11  * 1 barcode: 87299123', 3799.9700000000003, CAST(N'2023-04-29T15:15:32.000' AS DateTime), N'באר שבע', N'false')
GO
SET IDENTITY_INSERT [dbo].[TB_Order] OFF
GO
SET IDENTITY_INSERT [dbo].[TB_StoreItem] ON 
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1178, N'iPhone 14 Pro ', 800, N'https://th.bing.com/th/id/OIP.X9LIBkpM2Wlx1t6dA4qq4AAAAA?pid=ImgDet&w=300&h=300&rs=1', N'Phones', N'92244421')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1179, N'Galaxy S22 Plus 5G', 999.99, N'https://th.bing.com/th/id/OIP.A2iejhx_07zqbeYriUp8twHaHa?pid=ImgDet&rs=1', N'Phones', N'523523123')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1180, N'iPad Pro 11 ', 1799.99, N'https://th.bing.com/th/id/OIP.gKWWP3ZOdZS-NFcjnwAgIAHaG7?pid=ImgDet&rs=1', N'Ipads', N'87299123')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1181, N'Beats by Dr.Dre Solo2', 500, N'https://th.bing.com/th/id/R.16de834f1e72a509f9f5bc2f2cd397c1?rik=jyixbRRtVSQovw&pid=ImgRaw&r=0', N'Headphones', N'42234252')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1182, N'Headphones with Microphone', 10.99, N'https://i5.walmartimages.com/asr/5e2e9cf1-caa4-433d-8a10-31bbbbfb513a_1.e8255a3259c5987362750a241165434f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', N'Headphones', N'342388123')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1183, N'ASUS ROG STRIX G17', 2999.99, N'https://th.bing.com/th/id/R.098cdb80057abbc9b01bdaf5f7a748d0?rik=7cWD4FXLyffpHQ&pid=ImgRaw&r=0', N'Computers', N'252325425')
GO
INSERT [dbo].[TB_StoreItem] ([ID], [Name_Item], [Price_Item], [Img_Url], [Category], [Item_Barcode]) VALUES (1184, N'KOGAN 24" LED TV', 899.99, N'https://help.kogan.com/hc/article_attachments/360066377653/KALED24EH6000DVA_2_V2.jpg', N'TV screens', N'324256313')
GO
SET IDENTITY_INSERT [dbo].[TB_StoreItem] OFF
GO
SET IDENTITY_INSERT [dbo].[TB_User] ON 
GO
INSERT [dbo].[TB_User] ([ID], [User_Name], [User_Email], [User_Pass], [User_Status], [User_Rank]) VALUES (21, NULL, N'Admin@gmail.com', N'123123', N'false', N'admin')
GO
INSERT [dbo].[TB_User] ([ID], [User_Name], [User_Email], [User_Pass], [User_Status], [User_Rank]) VALUES (56, NULL, N'Business@gmail.com', N'123123', N'false', N'business')
GO
INSERT [dbo].[TB_User] ([ID], [User_Name], [User_Email], [User_Pass], [User_Status], [User_Rank]) VALUES (57, NULL, N'Regular@gmail.com', N'123123', N'false', N'regular')
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
