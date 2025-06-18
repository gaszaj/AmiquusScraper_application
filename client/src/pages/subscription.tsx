
import EditSubscriptionPage from "@/components/forms/EditSubscription";
import { Link, useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function SubscriptionPage() {
  const { t } = useLanguage();
  const params = useParams<{ id: string }>();
  const subId = params.id;

  // Fetch subscription data from API
  const { data, isLoading, error } = useQuery({
    queryKey: [`/api/subscriptions/${subId}`],
    queryFn: async () => {
      const response = await fetch(`/api/subscriptions/${subId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch subscription: ${response.statusText}`);
      }
      return response.json();
    },
    enabled: !!subId,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-primary dark:text-[#ff0]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <p className="text-red-500">{error.message}</p>
        <Link href="/dashboard">  {t("subscription.error")}</Link>
      </div>
    );
  }

  const subscription = data;

  if (!subscription) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <p className="text-red-500">{t("subscription.notFound")}</p>
        <Link href="/dashboard">{t("subscription.notFoundSub")}</Link>
      </div>
    );
  }

  return (
    <section
      id={`subscription_${subscription.id}`}
      className="bg-white dark:bg-neutral-900 py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            {t("subscription.title")}  
          </h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            {t("subscription.subTitle")} 
          </p>
        </div>
      </div>
      <EditSubscriptionPage subscription={subscription} />
    </section>
  );
}

// <Dialog open={isEditing} onOpenChange={setIsEditing}>
//   <DialogTrigger asChild>

//   </DialogTrigger>
//   <DialogContent className="sm:max-w-md">
//     <DialogHeader>
//       <DialogTitle>Edit Car Alert</DialogTitle>
//       <DialogDescription>
//         Update your car alert settings for {subscription.brand}{" "}
//         {subscription.model}
//       </DialogDescription>
//     </DialogHeader>
//     <div className="grid gap-4 pt-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="edit-brand">Brand</Label>
//           <Select
//             value={brand}
//             onValueChange={(value) => {
//               setBrand(value);
//               setModels(loadModels(value));
//             }}
//           >
//             <SelectTrigger id="edit-brand">
//               <SelectValue placeholder="Select Brand" />
//             </SelectTrigger>
//             <SelectContent>
//               {carBrands.map((b) => (
//                 <SelectItem key={b} value={b}>
//                   {b}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="edit-model">Model</Label>
//           <Select
//             value={model}
//             onValueChange={(value) => setModel(value)}
//             disabled={!models.length}
//           >
//             <SelectTrigger id="edit-model">
//               <SelectValue placeholder="Select Model" />
//             </SelectTrigger>
//             <SelectContent>
//               {models.length > 0 ? (
//                 models.map((m) =>
//                   m.trim() !== "" ? (
//                     <SelectItem key={m} value={m}>
//                       {m}
//                     </SelectItem>
//                   ) : null,
//                 )
//               ) : (
//                 <SelectItem value="placeholder-no-models" disabled>
//                   No Models Available
//                 </SelectItem>
//               )}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//       {/* Fuel Type */}
//       <div className="space-y-2">
//         <Label htmlFor="edit-fuel-type">Fuel Type</Label>
//         <Select
//           defaultValue={subscription.fuelType as string}
//           onValueChange={(value) => {
//             (subscription.fuelType as string) = value;
//           }}
//           disabled={!fuelTypes.length}
//         >
//           <SelectTrigger id="edit-fuel-type">
//             <SelectValue placeholder="Select Fuel Type" />
//           </SelectTrigger>
//           <SelectContent>
//             {fuelTypes.length > 0 ? (
//               fuelTypes.map((f) =>
//                 f.trim() !== "" ? (
//                   <SelectItem key={f} value={f}>
//                     {f}
//                   </SelectItem>
//                 ) : null,
//               )
//             ) : (
//               <SelectItem value="placeholder-no-fuel-types" disabled>
//                 No Fuel Types Available
//               </SelectItem>
//             )}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="edit-year-min">Year Min</Label>
//           <Input
//             id="edit-year-min"
//             defaultValue={subscription.yearMin}
//             type="number"
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="edit-year-max">Year Max</Label>
//           <Input
//             id="edit-year-max"
//             defaultValue={subscription.yearMax}
//             type="number"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="edit-price-min">Price Min ($)</Label>
//           <Input
//             id="edit-price-min"
//             defaultValue={subscription.priceMin}
//             type="number"
//           />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="edit-price-max">Price Max ($)</Label>
//           <Input
//             id="edit-price-max"
//             defaultValue={subscription.priceMax}
//             type="number"
//           />
//         </div>
//       </div>
//       {/* Max Kilometers */}
//       <div className="space-y-2">
//         <Label htmlFor="edit-mileage-max">Max Kilometers</Label>
//         <Input
//           id="edit-mileage-max"
//           defaultValue={subscription.mileageMax}
//           type="number"
//         />
//       </div>
//       {/* Websites */}
//       <div className="space-y-2">
//         <Label htmlFor="edit-websites">Websites</Label>
//         <div className="grid grid-cols-2 gap-2">
//           {websites.map((site) => (
//             <label key={site} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 value={site}
//                 checked={subscription.websites?.includes(site)}
//                 onChange={(e) => {
//                   const checked = e.target.checked;
//                   const updated = checked
//                     ? [...(subscription.websites || []), site]
//                     : (subscription.websites || []).filter(
//                         (s) => s !== site,
//                       );

//                   subscription.websites = updated;
//                 }}
//               />
//               <span className="text-sm">
//                 {site.charAt(0).toUpperCase() + site.slice(1)}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//       {subscription.websites?.includes("facebook") && (
//         <div className="space-y-2">
//           <Label htmlFor="facebook-url">Facebook Marketplace URL</Label>
//           <Input
//             id="facebook-url"
//             defaultValue={subscription.facebookMarketplaceUrl}
//             onChange={(e) => {
//               subscription.facebookMarketplaceUrl = e.target.value;
//             }}
//             placeholder="https://www.facebook.com/marketplace/..."
//           />
//         </div>
//       )}

//       {/* Update Frequency */}
//       <div className="space-y-2">
//         <Label htmlFor="edit-update-frequency">Update Frequency</Label>
//         <Select
//           defaultValue={subscription.updateFrequency}
//           onValueChange={(value) => {
//             subscription.updateFrequency = value;
//           }}
//           disabled={!["daily", "weekly", "monthly"].length}
//         >
//           <SelectTrigger id="edit-update-frequency">
//             <SelectValue placeholder="Select Update Frequency" />
//           </SelectTrigger>
//           <SelectContent>
//             {["daily", "weekly", "monthly"].map((f) =>
//               f.trim() !== "" ? (
//                 <SelectItem key={f} value={f}>
//                   {f.charAt(0).toUpperCase() + f.slice(1)}
//                 </SelectItem>
//               ) : null,
//             )}
//           </SelectContent>
//         </Select>
//       </div>
//       {/* Telegram Bot*/}
//       <div className="space-y-2">
//         <Label htmlFor="edit-telegram-bot">Telegram Bot Token</Label>
//         <Input
//           id="edit-telegram-bot"
//           defaultValue={subscription.telegramBotToken}
//           onChange={(e) => {
//             subscription.telegramBotToken = e.target.value;
//           }}
//         />
//       </div>
//       {/* Telegram Chat*/}
//       <div className="space-y-2">
//         <Label htmlFor="edit-telegram-chat">Telegram Chat ID</Label>
//         <Input
//           id="edit-telegram-chat"
//           defaultValue={subscription.telegramChatId}
//           onChange={(e) => {
//             subscription.telegramChatId = e.target.value;
//           }}
//         />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="edit-status">Status</Label>
//         <select
//           id="edit-status"
//           defaultValue={subscription.status}
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <option value="active">Active</option>
//           <option value="paused">Paused</option>
//         </select>
//       </div>
//     </div>
//     <DialogFooter className="mt-6">
//       <Button
//         type="button"
//         variant="outline"
//         onClick={() => {
//           document
//             .querySelector<HTMLButtonElement>(
//               '[data-state="open"] button[aria-label="Close"]',
//             )
//             ?.click();
//           setIsEditing(false);
//         }}
//       >
//         Cancel
//       </Button>
//       <Button
//         type="button"
//         onClick={() => {
//           const updatedData = {
//             brand,
//             model,
//             yearMin: Number(
//               (
//                 document.getElementById(
//                   "edit-year-min",
//                 ) as HTMLInputElement
//               )?.value,
//             ),
//             yearMax: Number(
//               (
//                 document.getElementById(
//                   "edit-year-max",
//                 ) as HTMLInputElement
//               )?.value,
//             ),
//             priceMin: Number(
//               (
//                 document.getElementById(
//                   "edit-price-min",
//                 ) as HTMLInputElement
//               )?.value,
//             ),
//             priceMax: Number(
//               (
//                 document.getElementById(
//                   "edit-price-max",
//                 ) as HTMLInputElement
//               )?.value,
//             ),
//             status: (
//               document.getElementById(
//                 "edit-status",
//               ) as HTMLSelectElement
//             )?.value,
//           };

//           onEdit({ ...subscription, ...updatedData });

//           document
//             .querySelector<HTMLButtonElement>(
//               '[data-state="open"] button[aria-label="Close"]',
//             )
//             ?.click();

//           setIsEditing(false);
//         }}
//       >
//         Save Changes
//       </Button>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>