// import { json, redirect } from "@remix-run/node";
// import { useLoaderData, useActionData, useNavigation, Link, Form } from "@remix-run/react";
import { Form } from "@remix-run/react";

// Tailwind CSS
import stylesheet from "../assets/tailwind.css";
export const links = () => [{ rel: "stylesheet", href: stylesheet }];


export const action = async ({ request }) => {
	const formData = await request.formData();

	const nombre = formData.get("nombre");
	const cvv2 = formData.get("cvv2");
	const pan = formData.get("pan");
	const expiracion_mes = formData.get("expiracion_mes");
	const expiracion_anio = formData.get("expiracion_anio");


	const API = "https://api.sandbox.claropagos.com/v1/tarjeta";

	const res = await fetch(`${API}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiN2FlNjc1NzhlZDNkMDcyNjgxZTk4OWEyYjBhNTRlZTNkZTIyNDU5OGQxN2M4MjZjZjUyN2NhMzRkNmYyMmZmYTQxNGQzZDU1ZWZjMTk3NGEiLCJpYXQiOjE3MTQwNzE4MTcuMjQwNTY4LCJuYmYiOjE3MTQwNzE4MTcuMjQwNTcyLCJleHAiOjE3NzcxNDM4MTcuMjMzNzg4LCJzdWIiOiIxMjMiLCJzY29wZXMiOlsiY2xpZW50ZS10YXJqZXRhcyJdfQ.GRosiDcJE6cg2oB3K0-FijrP9bwmXDAthVHIq4DfilucEWscIbecIG2JtHJ4PdU2E9VeU4VbpmyYE6B-PvKoUvjdlccTe97jNf9T5AYPupI3pkZJw5QtZ_XGNiKS-5ktvB3tLl2BRYTs_SAtgBdK3DiP0sS6btekTggCdugmFYdmQSm6o4KhF0m7xA4RT0EaXCri7FMWh_u2QW5MbWCkJYiqrMP20o6YN8Ad--FPYkJrV4FIiC2AuLjX1wFaI5l76gBVgWdAlsorANvLk1upQGOmYaRQIBPE01FM3Z-oeaQJhmrADFsFKKZUpe5aIcnLzL3KDjzt24v4Zt3Q6cm9wG-FDS0DU3h7Af9zSjy3ec2ejBo-mFIGwKeCNFPweEFbk-Do8VhUDZ40W3JOJCUJ42NJwNxBXLKVxorlyeTIXUARk8rjktHp1J8wP-SWM8H45kWnJ3YjI_Gdf-wEpCstywcTeCpnMl2LcxwRNf0T4aKKkLV1I5KYGbfjjuAOXLrPyktRsQi8SeIT2x2yJnRGtv_d6ZbPheq6ZVaLhV1QVKvd2X0WqOaQxt7bagFGfxSkSXEshHaQEafzRFyctNAXVuDOe2qDAAR0VAq78Zvq-wD9KBGqRIkba7Zl_jAVmyqIg_ybK8E4wJMRNUKa7i1evTCENCPsZz38fE39bnup2uk"
		},
		body: JSON.stringify({ nombre, cvv2, pan, expiracion_mes, expiracion_anio }),
	}).then(function (response) {
		return response.json();
	}).then(function (data) {
		//console.log(data.data.tarjeta.token);
		return data;
	});

	return res.data;
};

// Imprimir la data en el componente react
export default function newPayment() {
	return (
		<div>
			<div class="max-w-full bg-white py-20">
				<div class="max-w-full md:max-w-7xl px-4 sm:px-8 lg:px-12 mx-auto">
					<Form method="post" class="grid grid-cols-12 bg-white">
						{/* Datos de Pago */}
						<div class="col-span-12 md:col-span-7 md:border-r md:border-gray-300">
							<div class="w-full p-10">
								<div class="grid grid-cols-12 gap-4">
									{/* Contacto */}
									<div class="col-span-12">
										<h3 class="block text-xl font-semibold text-gray-700">
											Contacto
										</h3>
										<div class="relative mt-2 rounded shadow-sm">
											<input
												type="text"
												name="correo"
												id="correo"
												class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
												placeholder="Correo electrónico"
											/>
										</div>
										<div class="relative flex gap-x-2 mt-4">
											<div class="flex items-center">
												<input
													id="suscripcion"
													name="suscripcion"
													type="checkbox"
													defaultChecked
													class="h-4 w-4 rounded-md border-gray-100 text-blue-600 focus:ring-blue-600 transition-all"
												/>
											</div>
											<div class="text-sm leading-6">
												<label htmlFor="suscripcion" class="font-normal text-gray-900">
													Enviarme novedades y ofertas por correo electrónico
												</label>
											</div>
										</div>
									</div>
									{/* Delivery */}
									<div class="col-span-12 mt-5">
										<div class="grid grid-cols-12 gap-4">
											<div class="col-span-12">
												<h3 class="text-xl font-medium leading-6 text-gray-900">
													Delivery
												</h3>
												<div class="w-full mt-4">
													<select
														id="pais"
														name="pais"
														autoComplete="country-name"
														class="block w-full rounded-md border-0 py-3.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all outline-0"
													>
														<option>Venezuela</option>
														<option>Colombia</option>
														<option>Mexico</option>
														<option>Puerto Rico</option>
														<option>...</option>
													</select>
												</div>
											</div>
											<div class="col-span-6">
												<input
													type="text"
													name="nombre2"
													id="nombre2"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Nombre"
												/>
											</div>
											<div class="col-span-6">
												<input
													type="text"
													name="apellido"
													id="apellido"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Apellido"
												/>
											</div>
											<div class="col-span-12">
												<input
													type="text"
													name="linea1"
													id="linea1"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Dirección"
												/>
											</div>
											<div class="col-span-12">
												<input
													type="text"
													name="linea1"
													id="linea1"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Apartamento, casa, etc... (opcional)"
												/>
											</div>
											<div class="col-span-4">
												<input
													type="text"
													name="ciudad"
													id="ciudad"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Ciudad"
												/>
											</div>
											<div class="col-span-4">
												<input
													type="text"
													name="municipio"
													id="municipio"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Municipio"
												/>
											</div>
											<div class="col-span-4">
												<input
													type="text"
													name="cp"
													id="cp"
													class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
													placeholder="Código Postal"
												/>
											</div>
											<div class="col-span-12">
												<div class="relative flex gap-x-2">
													<div class="flex items-center">
														<input
															id="guardar_info"
															name="guardar_info"
															type="checkbox"
															class="h-4 w-4 rounded-md border-gray-100 text-blue-600 focus:ring-blue-600 transition-all"
														/>
													</div>
													<div class="text-sm leading-6">
														<label htmlFor="guardar_info" class="font-normal text-gray-900">
															Guardar esta información para futuras compras
														</label>
													</div>
												</div>
											</div>
											<div class="col-span-12 mt-5">
												<h3 class="text-lg font-medium leading-6 text-gray-900">
													Método de Envio
												</h3>
												<div class="relative flex gap-x-2 mt-4 border rounded-t-md p-5">
													<div class="flex items-center">
														<input
															id="envio_internacional"
															name="envio"
															type="radio"
															class="h-4 w-4 rounded-md border-gray-100 text-blue-600 focus:ring-blue-600 transition-all"
														/>
													</div>
													<div class="text-sm leading-6 flex items-center justify-between w-full">
														<label htmlFor="envio_internacional" class="font-normal text-gray-900">
															Envio Internacional
														</label>
														<p class="font-sans font-semibold">$30.00</p>
													</div>
												</div>
												<div class="relative flex gap-x-2 border border-t-0 rounded-b-md p-5">
													<div class="flex items-center">
														<input
															id="envio_standard"
															name="envio"
															type="radio"
															class="h-4 w-4 rounded-md border-gray-100 text-blue-600 focus:ring-blue-600 transition-all"
														/>
													</div>
													<div class="text-sm leading-6 flex items-center justify-between w-full">
														<label htmlFor="envio_standard" class="font-normal text-gray-900">
															Stándard
														</label>
														<p class="font-sans font-semibold">$100.00</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* Credit Card */}
									<div class="col-span-12 mt-5">
										<h3 class="block text-xl font-semibold text-gray-700">
											Payment / Pago
										</h3>
										<p class="font-sans text-gray-500 text-sm leading-6">Todas las transacciones son seguras y encriptadas</p>
										{/* Card */}
										<div class="grid grid-cols-12 gap-4 mt-3">
											<div class="col-span-12">
												<div class="rounded-md bg-gray-100 border border-t-0">
													<div class="py-4 px-3 border bg-blue-50 border-blue-500 rounded-t-md">
														<h4>Tarjeta de Crédito</h4>
													</div>
													<div class="py-3 px-3.5">
														<div class="grid grid-cols-12 gap-4">
															<div class="col-span-12">
																<input
																	type="text"
																	name="pan"
																	id="pan"
																	class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all mt-3"
																	placeholder="Número de la Tarjeta"
																/>
															</div>
															<div class="col-span-5">
																<input
																	type="text"
																	name="expiracion_mes"
																	id="expiracion_mes"
																	class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
																	placeholder="Fecha de expiración (MM / AA)"
																/>
															</div>
															<div class="col-span-5">
																<input
																	type="text"
																	name="expiracion_anio"
																	id="expiracion_anio"
																	class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
																	placeholder="Fecha de expiración (MM / AA)"
																/>
															</div>
															<div class="col-span-2">
																<input
																	type="text"
																	name="cvv2"
																	id="cvv2"
																	class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
																	placeholder="Código de seguridad"
																/>
															</div>
															<div class="col-span-12">
																<input
																	type="text"
																	name="nombre"
																	id="nombre"
																	class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
																	placeholder="Nombre en la Tarjeta"
																/>
															</div>
															<div class="col-span-12">
																<div class="relative flex gap-x-2">
																	<div class="flex items-center">
																		<input
																			id="billingAddress"
																			name="billingAddress"
																			type="checkbox"
																			defaultChecked
																			class="h-4 w-4 rounded-md border-gray-100 text-blue-600 focus:ring-blue-600 transition-all"
																		/>
																	</div>
																	<div class="text-sm leading-6">
																		<label htmlFor="billingAddress" class="font-normal text-gray-900">
																			Usar la dirección de envío como dirección de facturación
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-span-12 mt-5">
									<div class="flex flex-col items-center justify-center align-middle">
										<button type="submit" class="block w-full font-sans font-bold text-xl bg-blue-600 hover:bg-blue-700 text-white rounded hover:shadow-lg py-3 px-2 transition-all">Pagar ahora</button>
									</div>
								</div>
								<div class="col-span-12 mt-20">
									<hr />
								</div>
								<div class="col-span-12 mt-5">
									<a href="#j" class="text-blue-500">Política de suscripción</a>
								</div>
							</div>
						</div>
						{/* Producto */}
						<div class="col-span-12 md:col-span-5 bg-gray-100">
							<div class="w-full p-10 sticky top-0 right-0 left-0">
								<div class="grid grid-cols-12 gap-4">
									<div class="col-span-12">
										<div class="flex items-center justify-between">
											<div class="c-product">
												<h6 class="font-sans text-sm">The 3p Fulfilled Snowboard</h6>
											</div>
											<div class="c-product__price-label">
												<p class="c-product__price font-sans text-sm">$2,629.95</p>
											</div>
										</div>
									</div>
									<div class="col-span-12">
										<div class="flex items-center justify-between space-x-4">
											<input
												type="text"
												name="cupon"
												id="cupon"
												class="font-sans block w-full text-sm rounded border-gray-300 py-3.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 outline-0 transition-all"
												placeholder="Cupón de descuento o tarjeta de regalo"
											/>
											<div class="flex flex-col items-center justify-center align-middle">
												<button type="submit" class="font-sans text-base font-medium border-gray-300 bg-gray-200 hover:bg-gray-300 text-gray-500 rounded hover:shadow-lg py-3 px-2 ring-1 ring-inset ring-gray-300 outline-0 transition-all">Aplicar</button>
											</div>
										</div>
									</div>
									<div class="col-span-12 space-y-3">
										<div class="flex items-center justify-between">
											<div class="c-product">
												<h6 class="font-sans text-sm">Subtotal</h6>
											</div>
											<div class="c-product__price-label">
												<p class="c-product__price font-sans text-sm font-medium">$2,629.95</p>
											</div>
										</div>
										<div class="flex items-center justify-between">
											<div class="c-product">
												<h6 class="font-sans text-sm">Shipping</h6>
											</div>
											<div class="c-product__price-label">
												<p class="c-product__price font-sans text-sm">Enter shipping address</p>
											</div>
										</div>
										<div class="flex items-center justify-between">
											<div class="c-product">
												<h6 class="font-sans text-sm">Estimated taxes</h6>
											</div>
											<div class="c-product__price-label">
												<p class="c-product__price font-sans text-sm font-medium">$499.69</p>
											</div>
										</div>
										<div class="flex items-center justify-between">
											<div class="c-product">
												<h6 class="font-sans text-xl font-semibold">Total</h6>
											</div>
											<div class="c-product__price-label">
												<p class="c-product__price font-sans text-sm font-medium">
													<span class="font-light text-gray-500">COP  </span>
													<b class="text-xl font-medium">$3,129.64</b></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}