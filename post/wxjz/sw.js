this.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(res => {
			return res ||
				fetch(event.request).then(responese => {
					const responeseClone = responese.clone();
					caches.open('sw_demo').then(cache => {
						if (responese.url.indexOf('itakeo') > 0) cache.put(event.request, responeseClone);
					});
					return responese;
				}).catch(err => {
					console.log(err);
				});
		})
	)
});

this.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('sw_demo').then(function (cache) {
			return cache.addAll([
				"static/media/bg2.b07b4fbdbcf36617c19e.jpg",
				"static/media/iconSprites.de48f4a5f2ef69c94df0.png",
				"static/media/3.17f7af737f9602a49dd8.jpg",
				"static/media/my.c889722f34f1f45e8ced.jpg",
				"static/media/wxPay.6cd3f588ded7e7790cbf.png",
				"static/media/4.c09d805cc8e40053c6b4.jpg",
				"static/media/1.cb4d5c61406acd7a9d04.jpg",
				"static/media/2.4c9a516a8acb4153df26.jpg",
				"static/media/5.45702866699dc3a9028f.jpg",
				"static/media/97.9a8f009fc92339f0add6.jpg",
				"static/media/55.836b50114baef66a94ea.jpg",
				"static/media/181.1ecc20fbbe5d0b90548b.jpg",
				"static/media/96.1a5d3b4b82f9181af1e6.jpg",
				"static/media/161.a56f6ed002de17a1ca7e.jpg",
				"static/media/157.ef3296bbdebc6825a389.jpg",
				"static/media/12.db8121a3a34a79e5980c.jpg",
				"static/media/190.48e65681c9df8d060e56.jpg",
				"static/media/166.0823e63ae11a535ea7e1.jpg",
				"static/media/147.bfa53fc48a6e4e5327dd.jpg",
				"static/media/200.5c33ac0862655cca034e.jpg",
				"static/media/27.9c83901fddfdee7b570e.jpg",
				"static/media/86.b329e69aaf530cd07f5a.jpg",
				"static/media/160.f7f05b3ce1e77e4d9c2e.jpg",
				"static/media/148.e09c9132fe83b776e7c8.jpg",
				"static/media/u(3).0dc0a512ccc3ecf1ebd1.jpg",
				"static/media/40.419ee5f341138177db5e.jpg",
				"static/media/115.3160f23ccb69ac941de7.jpg",
				"static/media/152.ab74e6fab6be21c6dad8.jpg",
				"static/media/0.c17308b868361ae17b29.jpg",
				"static/media/65.8718b934d973a6c4ebdd.jpg",
				"static/media/168.cb508e7a2e99669bba2f.jpg",
				"static/media/84.30b8503f316e062ac3c7.jpg",
				"static/media/134.8716a4099d4b2f50a73b.jpg",
				"static/media/153.1fadc1d04457b57c093e.jpg",
				"static/media/170.13e8dd5307a894e8e04e.jpg",
				"static/media/93.13e8dd5307a894e8e04e.jpg",
				"static/media/128.d762d0d2026a4fcf669d.jpg",
				"static/media/80.165da4f01baec3e5c30a.jpg",
				"static/media/109.75dcd7f43eeefacf6ee7.jpg",
				"static/media/17.984772dbd79ffdbb6b45.jpg",
				"static/media/37.9350d3eb5006a3829413.jpg",
				"static/media/111.aa78c6358d7fa84905ac.jpg",
				"static/media/192.87dfdb319946e9f1b530.jpg",
				"static/media/118.95e3bafe4e98be07a376.jpg",
				"static/media/197.888ea35dfad4f4a7d7b2.jpg",
				"static/media/63.54b5281d1306b034b69a.jpg",
				"static/media/127.ed832085095976a79928.jpg",
				"static/media/139.1944debd3c4b9e148c0a.jpg",
				"static/media/82.88d7151987772b652be2.jpg",
				"static/media/22.268c8ff2de56d7896538.jpg",
				"static/media/72.943f65857f7f654e73b2.jpg",
				"static/media/198.ff81f7680021af36ce2d.jpg",
				"static/media/38.5bf20c4d266340f5c7b7.jpg",
				"static/media/123.3b3d0356cf62d007ab6d.jpg",
				"static/media/119.9bc42710a2ea61a4a8eb.jpg",
				"static/media/u(23).6b5a01cc7ef070ba5aee.jpg",
				"static/media/50.c1b8f5f33563c13b1fc5.jpg",
				"static/media/145.156f7566b9ce68d54c98.jpg",
				"static/media/9.b657993a05f2a98eeaf6.jpg",
				"static/media/132.78759720653c84a4adcf.jpg",
				"static/media/16.e94ed05c7f9284432a1d.jpg",
				"static/media/75.d5189614f1a01006498d.jpg",
				"static/media/189.3a68ffa4ab4e535b2d65.jpg",
				"static/media/99.8e0e3556aa44f0e975c1.jpg",
				"static/media/26.f9332d22e1ddb5c0bd73.jpg"
			])
		})
	);
});